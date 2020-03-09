class Admin {

    addStd(student) {
        var id= NaN;
        if(localStorage.getItem('ID') == null){
            console.log('jj');
            id = 1;
        }else{
            id = parseInt(localStorage.getItem('ID')) + 1;
        }
        localStorage.setItem('ID', id);
        let std = new Map(JSON.parse(localStorage.getItem('stuMap')));
        let mMap = new Map(JSON.parse(localStorage.getItem('maleMap')));
        let fMap = new Map(JSON.parse(localStorage.getItem('femaleMap')));
        if (student.Gender == "Male"){
            mMap.set(id.toString(),student);
        }else{
            fMap.set(id.toString(),student);
        }
        std.set(id.toString(),student);
        localStorage.setItem('stuMap',JSON.stringify(Array.from(std)));
        localStorage.setItem('maleMap',JSON.stringify(Array.from(mMap)));
        localStorage.setItem('femaleMap',JSON.stringify(Array.from(fMap)));
        return std;
        //return mMap;
    }
    getStd(){
        let std = new Map(JSON.parse(localStorage.getItem('stuMap')));
        let mMap = new Map(JSON.parse(localStorage.getItem('maleMap')));
        let fMap = new Map(JSON.parse(localStorage.getItem('femaleMap')));
        //let ID =  localStorage.getItem('Id');
        return std;
        //return mMap;
    }
    deleteStd(delid){
        let std = new Map(JSON.parse(localStorage.getItem('stuMap')));
        let mMap = new Map(JSON.parse(localStorage.getItem('maleMap')));
        let fMap = new Map(JSON.parse(localStorage.getItem('femaleMap')));
        let cMap = new Map(JSON.parse(localStorage.getItem('cacheMap')));
        std.delete(delid);
        mMap.delete(delid);
        fMap.delete(delid);
        cMap.delete(delid);
        localStorage.setItem('stuMap',JSON.stringify(Array.from(std)));
        localStorage.setItem('maleMap',JSON.stringify(Array.from(mMap)));
        localStorage.setItem('femaleMap',JSON.stringify(Array.from(fMap)));
        localStorage.setItem('cacheMap',JSON.stringify(Array.from(cMap)));
        return std;
    }

    search(item){
        debugger;
        let std = new Map(JSON.parse(localStorage.getItem('stuMap')));
        let cMap = new Map(JSON.parse(localStorage.getItem('cacheMap')));

        if(cMap.size != 0){
            let j= [];
            console.log(cMap);
            cMap.forEach((n,i) => {
            let x=0;
            for(x ; x < n.Certification.length || x <n.SpecialAchievements.length ; x++){
            if(n.Certification[x].startsWith(item) || n.SpecialAchievements[x].startsWith(item)){
                console.log(n.Certification[x]);
                j.push(i);    
                //console.log(j);    
            }
        }
        });
        //return j;
        if(j.length == 0){
            
                std.forEach((m,k) => {
                    let y=0;
                    for(y ; y < m.Certification.length || y <m.SpecialAchievements.length ; y++){
                       console.log( m.Certification[y]);
                    if(m.Certification[y].startsWith(item) || m.SpecialAchievements[y].startsWith(item)){
                        console.log(m.Certification[y]);
                        j.push(k);    
                        //console.log(j);
                        var temp1 = cMap.get(k);
                        temp1.Certification.push( m.Certification[y]);
                        temp1.SpecialAchievements.push(m.SpecialAchievements[y]);
                         let st = {
                            Certification: temp1.Certification,
                            SpecialAchievements: temp1.SpecialAchievements
                        };
                        cMap.set(k,st);
                        localStorage.setItem('cacheMap',JSON.stringify(Array.from(cMap)));
                    }
                }
                });
                return j;
            
        }
        else {
            return j;
        }
        }else{
             let id = -1;
             let st = {
                Certification: [],
                SpecialAchievements: []
            };
            cMap.set(id.toString(),st);
            localStorage.setItem('cacheMap',JSON.stringify(Array.from(cMap)));
            this.search(item);
        }

         // this j will return the id of the object an item is present in.s
        
    }

    EditName(id,name) {
        let std = new Map(JSON.parse(localStorage.getItem('stuMap')));
        //debugger;
        let temp=std.get(id);
        temp.StudentName= name;
        std.set(id,temp)

        localStorage.setItem('stuMap',JSON.stringify(Array.from(std)));
    }

    Editmail(id,email) {
        let std = new Map(JSON.parse(localStorage.getItem('stuMap')));
        //debugger;
        let temp=std.get(id);
        temp.StudentEmail= email;
        std.set(id,temp)

        localStorage.setItem('stuMap',JSON.stringify(Array.from(std)));
    }

}