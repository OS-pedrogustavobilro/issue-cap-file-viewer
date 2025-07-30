import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { FileTransfer } from '@capacitor/file-transfer';
import { FileViewer } from '@capacitor/file-viewer';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor() { }

  async downloadAndOpenLocalPath() {
    const url = new URL('https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf');

    const filesystemUri = await Filesystem.getUri({
      directory: Directory.Documents,
      path: url.pathname
    });

    console.log('uri', filesystemUri.uri);

    const result = await FileTransfer.downloadFile({
      url: url.href,
      path: filesystemUri.uri
    });
    console.log('downloaded', result);

    try {
      if (result && result.path) {
        console.log('** opening: (localPath) **', result.path);
        await FileViewer.openDocumentFromLocalPath({
          path: result.path
        });
      } else {
        console.error("No path from FileTransfer.downloadFile");
      }
    } catch (e) {
      console.error('caught error opening local path', e);
    }
  }
}
