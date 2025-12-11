# Chameleon Chess Puzzles

This directory contains custom puzzle files created with the Puzzle Creator (`admin.html`).

## File Format

Each puzzle is stored as a JSON file with the following structure:

```json
{
  "boardWidth": 8,
  "boardHeight": 8,
  "boardSize": 8,
  "pieces": [
    {
      "type": "chameleon",
      "x": 0,
      "y": 7,
      "disguise": null
    },
    {
      "type": "king",
      "x": 7,
      "y": 0,
      "disguise": null
    }
  ],
  "moves": 5,
  "title": "Level 6: Custom Challenge",
  "description": "Optional puzzle description"
}
```

## Fields

- **boardWidth**: Number of columns (3-12)
- **boardHeight**: Number of rows (3-12)
- **boardSize**: For backward compatibility with square boards
- **pieces**: Array of piece objects with type, position (x, y), and disguise state
- **moves**: Maximum number of moves allowed to solve the puzzle
- **title**: Puzzle title (required)
- **description**: Puzzle description (optional)

## Piece Types

- `chameleon` - Player piece with transformation ability
- `king` - Enemy king (required)
- `queen` - Enemy queen
- `rook` - Enemy rook
- `bishop` - Enemy bishop
- `knight` - Enemy knight
- `pawn` - Enemy pawn

## Creating Puzzles

1. Open `admin.html` in your browser
2. Design your puzzle using the visual editor
3. Click "Export as JSON" - it will download to your Downloads folder
4. Move the file to this directory using the helper script:
   ```bash
   node move-puzzles.js <filename>
   ```
   Example:
   ```bash
   node move-puzzles.js level-6-advanced-strategy.json
   ```
5. The puzzle can now be imported into the main game or shared with others

### Helper Script

The `move-puzzles.js` script helps you move downloaded puzzle files:

**Move by filename (assumes Downloads folder):**
```bash
node move-puzzles.js level-6-test.json
```

**Or provide full path:**
```bash
node move-puzzles.js ~/Downloads/level-6-test.json
```

**See usage:**
```bash
node move-puzzles.js
```

## Naming Convention

Files are automatically named based on the puzzle title:
- Lowercase
- Spaces and special characters replaced with hyphens
- Example: "Level 6: Advanced Strategy" → `level-6-advanced-strategy.json`
