/**
 * Created by ehealthafrica on 5/25/15.
 */

var msges = {};

msges.type = '';
msges.template = {
  "stockout" : "{{facilityName}} is out {{product}}. please take step to re-stock them"
}

function templateEng (tpl, data){
  var re = /{{([^%}}]+)?}}/g;
  var str = tpl.replace(re, function(i, token){
    return data[token];
  })
  return str;
}
msges.prepare = function(data){

  //console.log(data);
  data.msg = templateEng(msges.template.stockout, data);
  return data;
};

module.exports = msges;