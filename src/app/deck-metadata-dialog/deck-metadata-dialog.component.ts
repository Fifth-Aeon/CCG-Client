import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeckList } from 'app/game_model/deckList';
import { Card } from 'app/game_model/card';
import { allCards } from 'app/game_model/cards/allCards';

@Component({
  selector: 'ccg-deck-metadata-dialog',
  templateUrl: './deck-metadata-dialog.component.html',
  styleUrls: ['./deck-metadata-dialog.component.scss']
})
export class DeckMetadataDialogComponent implements OnInit {
  public deck: DeckList;
  public cards: Array<Card>;

  constructor(public dialogRef: MatDialogRef<DeckMetadataDialogComponent>) { }

  ngOnInit() {
    this.cards = this.deck.getRecordList().map(rec => rec.card);
    console.log(this.cards);
  }

  public done() {
    this.deck.customMetadata = true;
    this.dialogRef.close([]);
  }

}
