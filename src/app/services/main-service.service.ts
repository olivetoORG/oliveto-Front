import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  constructor(private http: HttpClient) {}

  baseUrl: any = 'https://dashboard.oliveto-ksa.com/api';

  getAllCategories() {
    return this.http.get<any>(`${this.baseUrl}/categories`);
  }

  getAllProducts() {
    return this.http.get<any>(`${this.baseUrl}/products`);
  }

  getAllGalleries() {
    return this.http.get<any>(`${this.baseUrl}/galleries`);
  }

  getBanner() {
    return this.http.get<any>(`${this.baseUrl}/banners`);
  }

  convertFileToBinary(file: File): Promise<ArrayBuffer> {
    return new Promise<ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result instanceof ArrayBuffer) {
          resolve(reader.result);
        } else {
          reject(new Error('Failed to read file as ArrayBuffer.'));
        }
      };

      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  }

  sendContactData(data: any): Observable<any> {
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);
    formData.append('phone', data.phone);
    formData.append('file', data.file);

    return this.http.post<any>(`${this.baseUrl}/contact_us`, formData);
  }
}
