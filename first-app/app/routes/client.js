import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {nom:'Smith',
            details:'Détail du client Smith'}
  }
  actions:{
    
  }
});
