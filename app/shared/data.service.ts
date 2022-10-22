import { Injectable } from '@angular/core';
import { Student } from '../components/student/student';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  getAllStudents() {
    throw new Error('Method not implemented.');
  }
  addStudent(studentObj: Student) {
    throw new Error('Method not implemented.');
  }
  deleteStudent(student: Student) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
