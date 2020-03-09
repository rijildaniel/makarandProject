class Student {

    addCerti(id,certification) {
        let std = new Map(JSON.parse(localStorage.getItem('stuMap')));
        debugger;
        let temp=std.get(id);
        console.log(temp);
        console.log(certification);
        temp.Certification.push(certification);
        std.set(id,temp)

        localStorage.setItem('stuMap',JSON.stringify(Array.from(std)));
    }

    addSA(id,SA) {
        let std = new Map(JSON.parse(localStorage.getItem('stuMap')));
        //debugger;
        let temp=std.get(id);
        console.log(temp);
        console.log(SA);
        temp.SpecialAchievements.push(SA);
        std.set(id,temp)

        localStorage.setItem('stuMap',JSON.stringify(Array.from(std)));
    }
    addAddr(id,addr) {
        let std = new Map(JSON.parse(localStorage.getItem('stuMap')));
        //debugger;
        let temp=std.get(id);
        temp.StudentAddr= addr;
        std.set(id,temp)

        localStorage.setItem('stuMap',JSON.stringify(Array.from(std)));
    }
    

    getStd(id){
        let std = new Map(JSON.parse(localStorage.getItem('stuMap')));
        console.log(std);
        
        return std.get(id);
    }

    stdlogin(id,pass){
        console.log(id,pass);
        debugger
        let std = new Map(JSON.parse(localStorage.getItem('stuMap')));
        console.log(std);
        
        let temp = std.get(id);
        //debugger;
        console.log(temp);
        
        if(temp !== undefined && temp.Password==pass){
            sessionStorage.setItem('id',id);
            return true;
        }else{
            return false;
        }
    }

    EditAddr(id,addr) {
        let std = new Map(JSON.parse(localStorage.getItem('stuMap')));
        debugger;
        let temp=std.get(id);
        temp.StudentAddr= addr;
        std.set(id,temp)

        localStorage.setItem('stuMap',JSON.stringify(Array.from(std)));
    }

    EditCerti(id,certi) {
        var edit=certi.split(',')
        let std = new Map(JSON.parse(localStorage.getItem('stuMap')));
        let cMap = new Map(JSON.parse(localStorage.getItem('cacheMap')));
        debugger;
        if(cMap.has(id)){
            let x = cMap.get(id);
            x.Certification = edit;
            cMap.set(id,x);
            localStorage.setItem('cacheMap',JSON.stringify(Array.from(cMap)));
        }
        let temp=std.get(id);
        temp.Certification= edit;
        std.set(id,temp)
        
        localStorage.setItem('stuMap',JSON.stringify(Array.from(std)));
    }
    EditSA(id,sa) {
        let std = new Map(JSON.parse(localStorage.getItem('stuMap')));
        let cMap = new Map(JSON.parse(localStorage.getItem('cacheMap')));
        debugger;
        if(cMap.has(id)){
            let x = cMap.get(id);
            x.SpecialAchievements = sa;
            cMap.set(id,x);
            localStorage.setItem('cacheMap',JSON.stringify(Array.from(cMap)));
        }
        let temp=std.get(id);
        temp.SpecialAchievements= sa;
        std.set(id,temp)
        localStorage.setItem('stuMap',JSON.stringify(Array.from(std)));
    }
}