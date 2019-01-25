function getInfo(obj){
  let pet="";
  if(typeof obj.pet == "object") {
    pet = obj.pet.join(", ");
  } else if(typeof obj.pet == "string"){
    pet = obj.pet;
  } else {
    pet = "none";
  }
  return obj.name + "<br>" + obj.email + "<br>" + obj.phone + "<br>" + pet + "<br>";
}

module.exports = getInfo;
