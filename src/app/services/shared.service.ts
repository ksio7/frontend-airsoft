import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private categoriesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public categories$: Observable<string[]> = this.categoriesSubject.asObservable();

  setCategories(categories: string[]): void {
    this.categoriesSubject.next(categories);
  }
}
