# Chameleon Chess - Implementation Plan

## Overview
Create a chess puzzle game featuring a custom "Chameleon" piece that can transform into captured pieces while maintaining distinctive chameleon eyes.

## Game Mechanics

### Chameleon Piece Abilities
1. **Move Action**: Move one step in any direction (like a king) - chameleon relocates
2. **Eat Action**: Capture a piece 2 steps away on diagonal directions only - **chameleon does NOT move, only captures**
3. **Transformation**: After capturing any piece (via move or eat), the chameleon transforms into that piece
4. **Visual Identity**: When disguised, the piece maintains big round "chameleon eyes" to distinguish it from regular pieces

### Core Features
- Chess puzzle format (checkmate in N moves)
- Canvas-based rendering
- Drag-and-drop or click-to-move controls
- Sound effects for piece placement
- Level progression system
- Undo functionality

## Technical Architecture

### File Structure
```
chess/
├── index.html (standalone game with embedded JS/CSS)
├── sounds/
│   └── click.ogg (borrowed from Game-of-the-Month)
└── IMPLEMENTATION_PLAN.md
```

### Technology Stack
- Vanilla JavaScript (ES6+)
- HTML5 Canvas for rendering
- Web Audio API for sound
- CSS for UI styling

## Implementation Phases

### Phase 1: Setup & Board Rendering
- [x] Create project structure
- [ ] Set up HTML canvas
- [ ] Implement chess board grid rendering (8x8 or custom sizes)
- [ ] Add basic CSS styling

### Phase 2: Piece System
- [ ] Define piece types (standard chess pieces + chameleon)
- [ ] Create chameleon visual (emoji or SVG with big eyes)
- [ ] Implement piece rendering on canvas
- [ ] Create disguised chameleon visuals (pieces with eyes overlay)

### Phase 3: Game Logic
- [ ] Implement standard chess piece movement rules
- [ ] Add chameleon one-step movement (like king)
- [ ] Add chameleon two-step diagonal capture
- [ ] Implement transformation system on capture
- [ ] Add move validation
- [ ] Implement checkmate detection

### Phase 4: Interactions
- [ ] Add click/tap piece selection
- [ ] Implement drag-and-drop movement
- [ ] Show valid move indicators
- [ ] Add move animations
- [ ] Integrate sound effects

### Phase 5: Puzzle System
- [ ] Create level data structure
- [ ] Design 5-10 puzzle levels featuring chameleon mechanics
- [ ] Add level progression
- [ ] Implement win/lose conditions
- [ ] Add reset and undo buttons

### Phase 6: Polish
- [ ] Add visual feedback (highlights, animations)
- [ ] Improve UI/UX
- [ ] Add instructions/tutorial
- [ ] Test all levels
- [ ] Final bug fixes

## Piece Definitions

### Standard Chess Pieces
- King (♚): Move 1 step any direction
- Queen (♛): Move any distance orthogonally or diagonally
- Rook (♜): Move any distance orthogonally
- Bishop (♝): Move any distance diagonally
- Knight (♞): L-shaped movement
- Pawn (♟): Move forward, capture diagonally

### Chameleon Piece
- **Symbol**: 🦎 (with big eyes overlay)
- **Base Movement**: 1 step in any direction (8 possible squares)
- **Special Eat**: 2 steps diagonally (4 possible squares)
- **Transformation**: Becomes captured piece + keeps chameleon eyes
- **Examples**:
  - Chameleon captures Knight → becomes "Knight with chameleon eyes"
  - Chameleon captures Queen → becomes "Queen with chameleon eyes"

## Visual Design

### Chameleon Eye Overlay
```
Regular pieces: ♚ ♛ ♜ ♝ ♞ ♟
Chameleon base: 🦎 (or custom emoji with big eyes)
Disguised: Standard piece symbol + eye markers (◉◉ or similar)
```

### Color Scheme
- Board: Alternating light/dark squares (classic chess)
- Highlights: Green for selected piece, blue for valid moves, red for captures
- Chameleon eyes: Distinctive color (yellow/gold) to stand out

## Sample Puzzle Ideas

### Level 1 (Tutorial): Basic Movement
- Small 4x4 board
- Chameleon vs King + Pawn
- Goal: Checkmate in 2 moves using simple movement

### Level 2: First Transformation
- 5x5 board
- Chameleon needs to capture Knight to reach King
- Goal: Transform and checkmate in 3 moves

### Level 3: Diagonal Eat
- 6x6 board
- Introduce 2-step diagonal eat mechanic
- Must capture piece far away using special ability

### Level 4: Multiple Transformations
- Standard 8x8 board
- Requires 2-3 transformations to solve
- Tests understanding of both mechanics

### Level 5: Complex Puzzle
- Full board with multiple pieces
- Optimal path requires strategic transformation choices
- Checkmate in 5 moves

## Sound Effects
- Piece movement: click.ogg
- Capture: eat.ogg (if available)
- Win: win.ogg
- Lose: lose.ogg

## Success Criteria
- [ ] Chameleon piece works correctly (move + eat)
- [ ] Transformation system preserves abilities
- [ ] Visual distinction (chameleon eyes) clear on all transformed pieces
- [ ] All puzzles solvable and tested
- [ ] Smooth animations and good UX
- [ ] Sound effects work properly
