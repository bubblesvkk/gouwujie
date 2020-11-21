const express=require('express')
const fs=require('fs')
const app = express()

app.all('*',function (req,res,next) {
//  设置运行跨域的域名，*表示都可以,任意域名
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Headers',"content-type")
  //允许加载的方式
  res.header('Access-Control-Allow-Methods',
    'DELETE,PUT,POST,GET,OPTIONS')
  if(req.method.toLowerCase() == 'options')
    res.send(200)
  else
    next()

})

  app.get('/home/multidata',function (req,res) {
    fs.readFile('./data/multidata.json',function(err,data){
      if(err){
        return res.send('err')
      }
      res.send(JSON.parse((data)))
    })

  })
app.get('/home/homedata',function (req,res) {
  fs.readFile('./data/homedata.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse((data)))
  })
})

app.get('/home/newstyle',function (req,res) {
  fs.readFile('./data/new1.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse((data)))
  })
})

app.get('/home/selection',function (req,res) {
  fs.readFile('./data/pop1.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse((data)))
  })
})




app.get('/category/categorydata',function (req,res) {
  fs.readFile('./data/category.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse((data)))
  })

})

app.get('/category/popdata',function (req,res) {
  fs.readFile('./data/subcategory3627.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse((data)))
  })
})

app.get('/category/subcategorydata',function (req,res) {
  fs.readFile('./data/subcategory582.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse((data)))
  })
})

app.get('/category/qunzidata',function (req,res) {
  fs.readFile('./data/subcategory595.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse((data)))
  })
})

app.get('/category/kuzidata',function (req,res) {
  fs.readFile('./data/subcategory596.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse((data)))
  })
})




app.listen(8000,function () {
  console.log('server is running...')

})
