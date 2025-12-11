# 🦎 Chameleon Chess

A unique chess puzzle game featuring a special "Chameleon" piece that can transform into any piece it captures.

## Features

- **Custom Chameleon Piece**: A unique piece with special abilities
  - Move one step in any direction (like a king)
  - Jump 2 steps diagonally to capture pieces
  - Transform into captured pieces while keeping distinctive chameleon eyes

- **5 Puzzle Levels**: Progressive difficulty introducing different mechanics
- **Interactive UI**: Click or drag pieces to move
- **Visual Feedback**: Highlighted valid moves and capture opportunities
- **Undo System**: Made a mistake? Undo your last move
- **Sound Effects**: Audio feedback for moves, captures, wins, and losses

## How to Play

### Opening the Game

Simply open `index.html` in a modern web browser (Chrome, Firefox, Safari, or Edge).

### Game Rules

1. **Objective**: Checkmate the enemy king within the move limit

2. **The Chameleon Piece** (🦎):
   - **Regular Move**: Move one step in any direction (8 possible squares) - chameleon moves to the new position
   - **Special Eat**: Capture a piece exactly 2 steps away diagonally **without moving** (chameleon stays in place!)
   - **Transformation**: After capturing any piece (via move or eat), the chameleon transforms into that piece
   - **Visual Identity**: The chameleon always keeps its distinctive big eyes, even when disguised

3. **Controls**:
   - Click on the chameleon to select it
   - Click on a highlighted square to move
   - Or drag the chameleon to a valid position
   - Use the UNDO button to take back your last move
   - Use RESET to restart the current level

### Example Transformations

- Chameleon captures Knight → Becomes a Knight with chameleon eyes
- Chameleon-Knight captures Rook → Becomes a Rook with chameleon eyes
- Chameleon-Rook captures Queen → Becomes a Queen with chameleon eyes

The chameleon's eyes always help you identify which piece is the disguised chameleon!

## Level Progression

1. **Level 1**: Tutorial - Learn basic one-step movement
2. **Level 2**: Long Range - Use the 2-step diagonal eat ability
3. **Level 3**: First Transformation - Capture and transform to gain new abilities
4. **Level 4**: Multiple Transformations - Chain transformations strategically
5. **Level 5**: Master Challenge - Put all your skills to the test

## Project Structure

```
chess/
├── index.html              # Main game file (standalone)
├── sounds/                 # Sound effect files
│   ├── click.ogg          # Click/move sound
│   ├── eat.ogg            # Capture sound
│   ├── win.ogg            # Victory sound
│   └── lose.ogg           # Defeat sound
├── IMPLEMENTATION_PLAN.md  # Development plan document
└── README.md              # This file
```

## Technical Details

- **Technology**: Vanilla JavaScript, HTML5 Canvas, Web Audio API
- **Borrowed Assets**: Sound effects from [Game of the Month 2025](../Game-of-the-Month-2025)
- **Board Rendering**: Inspired by classic chess UI with alternating square colors
- **No Dependencies**: Runs entirely in the browser, no build process needed

## Development

The game is built as a single HTML file for portability and ease of use. All JavaScript and CSS are embedded in the HTML file.

### Key Features:
- Piece movement validation
- Check and checkmate detection
- Undo/redo system
- Level progression tracking
- Drag and drop support
- Touch device compatible
- Audio feedback with fallback

## Credits

- **Game Design & Implementation**: Custom chess puzzle game
- **Sound Effects**: Borrowed from Game of the Month 2025
- **Chess Board UI**: Inspired by classic chess interfaces
- **Chameleon Concept**: Original mechanic for this project

## Browser Compatibility

Works best on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

Requires a browser that supports:
- HTML5 Canvas
- Web Audio API
- ES6 JavaScript

## Tips for Players

1. **Plan Ahead**: You have a limited number of moves per level
2. **Think About Transformations**: Sometimes you need to become a specific piece to reach the king
3. **Use the 2-Step Diagonal Eat**: This special ability can help you capture pieces that are hard to reach
4. **Watch the Eyes**: The chameleon's eyes will always help you identify which piece it has become
5. **Don't Rush**: Use the UNDO button to experiment with different strategies

## Future Enhancements

Potential additions:
- More levels with increasing difficulty
- Custom level editor
- Hints system
- Move counter and star rating
- Animation improvements
- Additional special pieces
- Multiplayer puzzle sharing

## License

This is a personal project for educational purposes.

Enjoy mastering the art of transformation! 🦎
