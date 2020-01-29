import Route from '@ember/routing/route';
import Note from 'td1/utils/note-class';

export default Route.extend({

  model(){
    return Note.create();
  }
  ,
  actions:{
    save(note){
      note.set("info","La note a bien été sauvegardée");
    },
    clear(note){
      note.set("info","");
    }

  }

});
