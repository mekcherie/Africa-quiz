import React, { Component } from 'react';
import store from '../index.js';
import { SET_FLASHCARD, PICK_FLASHCARD, FLIP_FLASHCARD } from '../actions';
import { setFlashcard } from './actions/index.js';


export default class Controls extends Component {
    render() {
        return (
            <section id="controls">
                <button className="back" onClick="">&lt;</button>
                <button className="show-answer" onClick={e => this.PICK_FLASHCARD()}>show answer</button>
                <button className="next" onClick={e => this.FLIP_FLASHCARD ()}>&gt;</button>
            </section>
        )
    }
    PICK_FLASHCARD() {
        store.dispatch(PICK_FLASHCARD ());
    }

    FLIP_FLASHCARD () {
        store.dispatch(FLIP_FLASHCARD ());
    }
}