"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Student =
/*#__PURE__*/
function () {
  function Student() {
    _classCallCheck(this, Student);
  }

  _createClass(Student, [{
    key: "addCerti",
    value: function addCerti(id, certification) {
      var std = new Map(JSON.parse(localStorage.getItem('stuMap')));
      debugger;
      var temp = std.get(id);
      console.log(temp);
      console.log(certification);
      temp.Certification.push(certification);
      std.set(id, temp);
      localStorage.setItem('stuMap', JSON.stringify(Array.from(std)));
    }
  }, {
    key: "addSA",
    value: function addSA(id, SA) {
      var std = new Map(JSON.parse(localStorage.getItem('stuMap'))); //debugger;

      var temp = std.get(id);
      console.log(temp);
      console.log(SA);
      temp.SpecialAchievements.push(SA);
      std.set(id, temp);
      localStorage.setItem('stuMap', JSON.stringify(Array.from(std)));
    }
  }, {
    key: "addAddr",
    value: function addAddr(id, addr) {
      var std = new Map(JSON.parse(localStorage.getItem('stuMap'))); //debugger;

      var temp = std.get(id);
      temp.StudentAddr = addr;
      std.set(id, temp);
      localStorage.setItem('stuMap', JSON.stringify(Array.from(std)));
    }
  }, {
    key: "getStd",
    value: function getStd(id) {
      var std = new Map(JSON.parse(localStorage.getItem('stuMap')));
      console.log(std);
      return std.get(id);
    }
  }, {
    key: "stdlogin",
    value: function stdlogin(id, pass) {
      console.log(id, pass);
      debugger;
      var std = new Map(JSON.parse(localStorage.getItem('stuMap')));
      console.log(std);
      var temp = std.get(id); //debugger;

      console.log(temp);

      if (temp !== undefined && temp.Password == pass) {
        sessionStorage.setItem('id', id);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "EditAddr",
    value: function EditAddr(id, addr) {
      var std = new Map(JSON.parse(localStorage.getItem('stuMap')));
      debugger;
      var temp = std.get(id);
      temp.StudentAddr = addr;
      std.set(id, temp);
      localStorage.setItem('stuMap', JSON.stringify(Array.from(std)));
    }
  }, {
    key: "EditCerti",
    value: function EditCerti(id, certi) {
      var edit = certi.split(',');
      var std = new Map(JSON.parse(localStorage.getItem('stuMap')));
      var cMap = new Map(JSON.parse(localStorage.getItem('cacheMap')));
      debugger;

      if (cMap.has(id)) {
        var x = cMap.get(id);
        x.Certification = edit;
        cMap.set(id, x);
        localStorage.setItem('cacheMap', JSON.stringify(Array.from(cMap)));
      }

      var temp = std.get(id);
      temp.Certification = edit;
      std.set(id, temp);
      localStorage.setItem('stuMap', JSON.stringify(Array.from(std)));
    }
  }, {
    key: "EditSA",
    value: function EditSA(id, sa) {
      var std = new Map(JSON.parse(localStorage.getItem('stuMap')));
      var cMap = new Map(JSON.parse(localStorage.getItem('cacheMap')));
      debugger;

      if (cMap.has(id)) {
        var x = cMap.get(id);
        x.SpecialAchievements = sa;
        cMap.set(id, x);
        localStorage.setItem('cacheMap', JSON.stringify(Array.from(cMap)));
      }

      var temp = std.get(id);
      temp.SpecialAchievements = sa;
      std.set(id, temp);
      localStorage.setItem('stuMap', JSON.stringify(Array.from(std)));
    }
  }]);

  return Student;
}();
