"use strict";
exports.__esModule = true;
var fs = require("fs");
var dir = './data/blog/';
function getFiles(dir) {
    var files = fs.readdirSync(dir);
    var list = [];
    for (var i in files) {
        if (["mdx", 'md'].includes(files[i].split('.').pop())) {
            list.push(files[i]);
        }
    }
    return list;
}
var BlogFixer = /** @class */ (function () {
    function BlogFixer(txt) {
        if (txt === void 0) { txt = ""; }
        this.txt = txt;
    }
    BlogFixer.prototype.get = function (txt) {
        if (txt) {
            this.txt = txt;
        }
        this.fixed_date = false;
        this.fixed_tag = false;
        this.fix();
        return this.txt;
    };
    BlogFixer.prototype.fix = function () {
        var idx;
        idx = 0;
        while (this.txt[idx] !== "\n") {
            idx += 1;
        }
        idx += 1;
        while (idx < this.txt.length) {
            if (this.txt[idx] === "\n") {
                idx += 1;
                if (this.end_of_header(idx)) {
                    break;
                }
            }
            if (this.txt[idx] === "d" && !this.fixed_date) {
                if (this.is_token("date", idx)) {
                    this.fix_date(idx);
                    idx = 0;
                }
            }
            if (this.txt[idx] === "t" && !this.fixed_tag) {
                if (this.is_token("tag", idx)) {
                    this.fix_tag(idx);
                    idx = 0;
                }
            }
            idx += 1;
        }
    };
    BlogFixer.prototype.end_of_header = function (idx) {
        for (var i = 0; i < 3; i += 1) {
            if (this.txt[idx + i] !== "-") {
                return false;
            }
        }
        return true;
    };
    BlogFixer.prototype.is_token = function (token, idx) {
        for (var i = 0; i < token.length; i += 1) {
            if (this.txt[idx + i] !== token[i]) {
                return false;
            }
        }
        return true;
    };
    BlogFixer.prototype.fix_date = function (idx) {
        var date, new_txt;
        this.fixed_date = true;
        while (this.txt[idx] !== ":") {
            idx += 1;
        }
        idx += 2;
        if (this.txt[idx] === "'") {
            return;
        }
        new_txt = this.txt.slice(0, idx);
        date = "";
        while (this.txt[idx] !== "\n") {
            date += this.txt[idx];
            idx += 1;
        }
        this.txt = new_txt + "'" + date + "'" + this.txt.slice(idx);
    };
    BlogFixer.prototype.fix_tag = function (idx) {
        var new_txt, s, tag, tags;
        this.fixed_tag = true;
        tags = [];
        while (this.txt[idx] !== "\n") {
            idx += 1;
        }
        if (this.txt[idx - 1] == ']') {
            return;
        }
        new_txt = this.txt.slice(0, idx);
        idx += 1;
        while (this.txt[idx] === " " &&
            this.txt[idx + 1] === " " &&
            this.txt[idx + 2] === "-") {
            idx += 4;
            tag = "";
            while (this.txt[idx] !== "\n") {
                tag += this.txt[idx];
                idx += 1;
            }
            tags.push(tag);
            idx += 1;
        }
        s = "[";
        for (var i = 0; i < tags.length; i += 1) {
            s += "'" + tags[i] + "',";
        }
        s = s.slice(0, -1) + "]";
        this.txt = new_txt + " " + s + "\n" + this.txt.slice(idx);
    };
    return BlogFixer;
}());
var fixblogs = function (blogs) {
    var txt = null;
    var fixer = new BlogFixer();
    for (var i in blogs) {
        try {
            txt = fs.readFileSync(dir + blogs[i]).toString().replace(/\r/g, "");
            txt = fixer.get(txt);
            console.log(dir + blogs[i]);
            fs.writeFileSync(dir + blogs[i], txt);
        }
        catch (err) {
            console.error(err);
        }
    }
};
var blogs = getFiles(dir);
fixblogs(blogs);
