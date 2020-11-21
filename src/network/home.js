import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

export function getHomedata() {
  return request({
    url:'/home/homedata'
  })
}

export function getnewStyledata() {
  return request({
    url:'/home/newstyle'
  })
}

export function getselectiondata() {
  return request({
    url:'/home/selection'
  })
}


export function getcategorydata() {
  return request({
    url:'/category/categorydata'
  })
}

export function getpopdata() {
  return request({
    url:'/category/popdata'
  })
}


export function getsubcategorydata() {
  return request({
    url:'/category/subcategorydata'
  })
}

export function getqunzidata() {
  return request({
    url:'/category/qunzidata'
  })
}

export function getkuzidata() {
  return request({
    url:'/category/kuzidata'
  })
}




