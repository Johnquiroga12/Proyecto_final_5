import  autoTable  from 'jspdf-autotable';
import { jsPDF } from 'jspdf';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImpresionService {

  constructor() { }

  imprimir(encabezado: string[], cuerpo: Array<any>, titulo: string, guardar?:boolean){

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: 'letter'
    });

    doc.text(titulo, doc.internal.pageSize.width /2, 25, {align: 'center'});

    autoTable(doc, {
      head: [['Name', 'Email', 'Country']],
      body: [
        ['David', 'david@example.com', 'Sweden'],
        ['Castille', 'castille@example.com', 'Spain'],
        // ...
      ],
    })


    if(guardar){
      const hoy = new Date();
      doc.save(hoy.getDate() + hoy.getMonth() + hoy.getFullYear() + hoy.getTime()+'.pdf');
    }else{

    }

  }
}
