import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { LEVELS } from './levels.enum';

export class Task {
        id = '';
        name = '';
        description = '';
        completed = false;
        level = LEVELS.NORMAL;

        constructor(id, name, description, completed, level) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.completed = completed;
            this.level = level;
        }
}
