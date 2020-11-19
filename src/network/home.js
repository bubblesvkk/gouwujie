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

export function getcategorydata() {
  return request({
    url:'/category/categorydata'
  })
}

export function getsubcategorydata() {
  return request({
    url:'/category/subcategorydata'
  })
}




