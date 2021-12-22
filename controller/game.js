var Hocvien=require("../models/Hocvien");

module.exports=function(app){
    app.get("/",function(req,res){
        res.render("layout");
    });

    app.post("/dangky",function(req,res){
        if(!req.body.Email || !req.body.HoTen || !req.body.SoDT)
        {
            res.json({ketqua:0,maloi:"Thieu paramater"});
        }
        else
        {
            var hocvienmoi =new Hocvien({
                Email:req.body.Email,
                HoTen:req.body.HoTen,
                SoDT:req.body.SoDT,
                ThanhToan:false,
                Vi:null,
                Ngay:Date.now()
                });
        hocvienmoi.save(function(err){
            if(err)
            {
                res.json({ketqua:0,maloi:"Mongoose save errr"});
            }
            else{
                res.json({ketqua:1,maloi:hocvienmoi});
            }
        })
        }
    });
}