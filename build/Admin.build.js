"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Admin =
/*#__PURE__*/
function () {
  function Admin() {
    _classCallCheck(this, Admin);
  }

  _createClass(Admin, [{
    key: "addStd",
    value: function addStd(student) {
      var id = NaN;

      if (localStorage.getItem('ID') == null) {
        console.log('jj');
        id = 1;
      } else {
        id = parseInt(localStorage.getItem('ID')) + 1;
      }

      localStorage.setItem('ID', id);
      var std = new Map(JSON.parse(localStorage.getItem('stuMap')));
      var mMap = new Map(JSON.parse(localStorage.getItem('maleMap')));
      var fMap = new Map(JSON.parse(localStorage.getItem('femaleMap')));

      if (student.Gender == "Male") {
        mMap.set(id.toString(), student);
      } else {
        fMap.set(id.toString(), student);
      }

      std.set(id.toString(), student);
      localStorage.setItem('stuMap', JSON.stringify(Array.from(std)));
      localStorage.setItem('maleMap', JSON.stringify(Array.from(mMap)));
      localStorage.setItem('femaleMap', JSON.stringify(Array.from(fMap)));
      return std; //return mMap;
    }
  }, {
    key: "getStd",
    value: function getStd() {
      var std = new Map(JSON.parse(localStorage.getItem('stuMap')));
      var mMap = new Map(JSON.parse(localStorage.getItem('maleMap')));
      var fMap = new Map(JSON.parse(localStorage.getItem('femaleMap'))); //let ID =  localStorage.getItem('Id');

      return std; //return mMap;
    }
  }, {
    key: "deleteStd",
    value: function deleteStd(delid) {
      var std = new Map(JSON.parse(localStorage.getItem('stuMap')));
      var mMap = new Map(JSON.parse(localStorage.getItem('maleMap')));
      var fMap = new Map(JSON.parse(localStorage.getItem('femaleMap')));
      var cMap = new Map(JSON.parse(localStorage.getItem('cacheMap')));
      std["delete"](delid);
      mMap["delete"](delid);
      fMap["delete"](delid);
      cMap["delete"](delid);
      localStorage.setItem('stuMap', JSON.stringify(Array.from(std)));
      localStorage.setItem('maleMap', JSON.stringify(Array.from(mMap)));
      localStorage.setItem('femaleMap', JSON.stringify(Array.from(fMap)));
      localStorage.setItem('cacheMap', JSON.stringify(Array.from(cMap)));
      return std;
    }
  }, {
    key: "search",
    value: function search(item) {
      debugger;
      var std = new Map(JSON.parse(localStorage.getItem('stuMap')));
      var cMap = new Map(JSON.parse(localStorage.getItem('cacheMap')));

      if (cMap.size != 0) {
        var j = [];
        console.log(cMap);
        cMap.forEach(function (n, i) {
          var x = 0;

          for (x; x < n.Certification.length || x < n.SpecialAchievements.length; x++) {
            if (n.Certification[x].startsWith(item) || n.SpecialAchievements[x].startsWith(item)) {
              console.log(n.Certification[x]);
              j.push(i); //console.log(j);    
            }
          }
        }); //return j;

        if (j.length == 0) {
          std.forEach(function (m, k) {
            var y = 0;

            for (y; y < m.Certification.length || y < m.SpecialAchievements.length; y++) {
              console.log(m.Certification[y]);

              if (m.Certification[y].startsWith(item) || m.SpecialAchievements[y].startsWith(item)) {
                console.log(m.Certification[y]);
                j.push(k); //console.log(j);

                var temp1 = cMap.get(k);
                temp1.Certification.push(m.Certification[y]);
                temp1.SpecialAchievements.push(m.SpecialAchievements[y]);
                var st = {
                  Certification: temp1.Certification,
                  SpecialAchievements: temp1.SpecialAchievements
                };
                cMap.set(k, st);
                localStorage.setItem('cacheMap', JSON.stringify(Array.from(cMap)));
              }
            }
          });
          return j;
        } else {
          return j;
        }
      } else {
        var id = 100;
        var st = {
          Certification: [],
          SpecialAchievements: []
        };
        cMap.set(id.toString(), st);
        localStorage.setItem('cacheMap', JSON.stringify(Array.from(cMap)));
        this.search(item);
      } // this j will return the id of the object an item is present in.s

    }
  }, {
    key: "EditName",
    value: function EditName(id, name) {
      var std = new Map(JSON.parse(localStorage.getItem('stuMap'))); //debugger;

      var temp = std.get(id);
      temp.StudentName = name;
      std.set(id, temp);
      localStorage.setItem('stuMap', JSON.stringify(Array.from(std)));
    }
  }, {
    key: "Editmail",
    value: function Editmail(id, email) {
      var std = new Map(JSON.parse(localStorage.getItem('stuMap'))); //debugger;

      var temp = std.get(id);
      temp.StudentEmail = email;
      std.set(id, temp);
      localStorage.setItem('stuMap', JSON.stringify(Array.from(std)));
    }
  }]);

  return Admin;
}();
