import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
  MAX:100,
  content:'Entrez votre texte',
  info:'',
  size:computed("content",function(){
    return this.get('MAX')-this.get('content').length;
  }),
  style:computed("size",function(){
    if(this.size>50){
      return "alert alert-success";
    } else if(this.size<=50 && this.size>=20){
      return "alert alert-warning";
    } else {
      return "alert alert-danger";
    }
  }),

  alertVisible:computed("info",function(){
    return this.get("info").length!=0;
  })
});
