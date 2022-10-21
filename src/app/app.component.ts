import { Component, OnInit } from '@angular/core';
import { EntriesService } from './services/entries.service';
import { Entry } from "./models/Entries";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  entry!: Entry[];

  constructor(private entriesService: EntriesService) {}

  ngOnInit(): void {
    this.getEntries();
  }

  getEntries() {
    this.entriesService.getEntries().subscribe((data) => {
      this.entry = data.entries;
      console.log(this.entry);
    });
  }
}