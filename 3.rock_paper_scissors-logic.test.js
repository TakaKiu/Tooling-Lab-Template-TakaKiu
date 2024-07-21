const { RockPaperScissors } = require('../resources/scripts/rock_paper_scissors.js');
const mathRandomSpy = jest.spyOn(Math, 'random');

describe('RockPaperScissors class', function () {
  describe('determineWinner()', function () {
    test('win cases', function () {
      const game = new RockPaperScissors('User');
      expect(game.determineWinner('rock', 'scissors')).toBe('win');
      expect(game.determineWinner('paper', 'rock')).toBe('win');
      expect(game.determineWinner('scissors', 'paper')).toBe('win');
    });

    test('tie cases', function () {
      const game = new RockPaperScissors('User');
      expect(game.determineWinner('rock', 'rock')).toBe('tie');
      expect(game.determineWinner('paper', 'paper')).toBe('tie');
      expect(game.determineWinner('scissors', 'scissors')).toBe('tie');
    });

    test('lose cases', function () {
      const game = new RockPaperScissors('User');
      expect(game.determineWinner('rock', 'paper')).toBe('lose');
      expect(game.determineWinner('paper', 'scissors')).toBe('lose');
      expect(game.determineWinner('scissors', 'rock')).toBe('lose');
    });
  });

  describe('generateCPUResponse()', function () {
    it('Math.random = 0.1 -> rock', function() {
      mathRandomSpy.mockImplementation(() => 0.1);
      const game = new RockPaperScissors('User');
      expect(game.generateCPUResponse()).toBe('rock');
    });

    it('Math.random = 0.5 -> paper', function() {
      mathRandomSpy.mockImplementation(() => 0.5);
      const game = new RockPaperScissors('User');
      expect(game.generateCPUResponse()).toBe('paper');
    });

    it('Math.random = 0.9 -> scissors', function() {
      mathRandomSpy.mockImplementation(() => 0.9);
      const game = new RockPaperScissors('User');
      expect(game.generateCPUResponse()).toBe('scissors');
    });
  });
});
