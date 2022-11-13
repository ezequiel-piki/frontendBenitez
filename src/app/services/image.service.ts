import { Injectable } from '@angular/core';
import { getDownloadURL, list, listAll, ref, Storage, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url: string = '';

  urlImageProyecto: string = '';

  constructor(private storage: Storage) { }

  public uploadImageProyecto($event: any) {

    const file = $event.target.files[0];

    console.log(file);


    const imgRef = ref(this.storage, `imagesProyectos/${file.name}`)

    uploadBytes(imgRef, file)
      .then(response => {
        console.log("fullpath:", response.metadata.fullPath);
        this.getImageProyectos()
      })
      .catch(error => console.log(error))

  }


  getImageProyectos() {


    const imagesRef = ref(this.storage, `imagesProyectos/`)
    console.log("imagesRef", imagesRef);

    list(imagesRef)
      .then(async response => {

        console.log("console de la response: ", response.items);


        for (let item of response.items) {
          console.log("Item", item)
          const url = await getDownloadURL(item)
          console.log("url imagen", url)
          this.urlImageProyecto = url;

          console.log("la url de la imagen del proyecto es: " + this.url);
        }
      })
      .catch(error => console.log("error", error))
  }

  getImage() {

    const imagesRef = ref(this.storage, 'imagen')
    list(imagesRef)
      .then(async response => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          console.log("la url es: " + this.url)
        }
      })
      .catch(error => console.log(error))
  }


  public uploadImage($event: any, name: string) {

    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage, `imagen/` + name);
    uploadBytes(imgRef, file)
      .then(response => {

        this.getImage()
      })
      .catch(error => console.log(error))

  }


}
