/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * Design Patterns Presentation.
 * Programación de Interfaces Interactivas
 *
 * @file command.ts
 * @author Igor Dragone <igor.dragone.13@ull.edu.es>
 * @author José Ramóon Morera Campos  <jose.morera.27@ull.edu.es>
 * @date  12/03/2024
 * @brief Explicative implementation of command pattern.
 *        Command is a behavioral design pattern.
 * @see {@link https://refactoring.guru/design-patterns/command}
 * @see {@link https://www.patterns.dev/vanilla/command-pattern}
 */

/**
 * Abstract class that represents an operation petition for the calculator.
 */
abstract class CalculatorCommand {
  /**
   * Constructor for the command.
   * @param operand the quantity to be used in the operation.
   */
  constructor(protected operand: number = 0) {}

  /// Command for calculating the operation
  abstract execute(currentCalculator: Calculator): void;
  /// Comand for calculating the number prior to the operation.
  abstract unExecute(currentCalculator: Calculator): void;
}

/**
 * Class that represents the add operation for the calculator.
 */
class AddCommand extends CalculatorCommand {
  /**
   * Constructor for the implementation of add.
   * @param operand the quantity to be added.
   */
  constructor(operand: number) {
    super(operand);
  }

  /**
   * Method for executing the add operation.
   * @param currentCalculator the calculator to be used.
   */
  execute(currentCalculator: Calculator): void {
    const ADD_OPERATOR: string = '+';
    currentCalculator.operation(ADD_OPERATOR, this.operand);
  }

  /**
   * Reverses the add operation by substracting
   * @param currentCalculator the calculator to be used.
   */
  unExecute(currentCalculator: Calculator): void {
    const SUB_OPERATOR: string = '-';
    currentCalculator.operation(SUB_OPERATOR, this.operand);
  }
}

/**
 * Class that represents the substract operation for the calculator.
 */
class SubstractCommand extends CalculatorCommand {
  /**
   * Constructor for the implementation of substract.
   * @param operand the quantity to be substracted.
   */
  constructor(operand: number) {
    super(operand);
  }

  /**
   * Method for executing the substract operation.
   * @param currentCalculator the calculator to be used.
   */
  execute(currentCalculator: Calculator): void {
    const ADD_OPERATOR: string = '-';
    currentCalculator.operation(ADD_OPERATOR, this.operand);
  }

  /**
   * Reverses the substract operation by adding.
   * @param currentCalculator the calculator to be used.
   */
  unExecute(currentCalculator: Calculator): void {
    const SUB_OPERATOR: string = '+';
    currentCalculator.operation(SUB_OPERATOR, this.operand);
  }
}

/**
 * Class that represents the multiply operation for the calculator.
 */
class MultiplyCommand extends CalculatorCommand {
  /**
   * Constructor for the implementation of multiply.
   * @param operand the quantity to be multiplied.
   */
  constructor(operand: number) {
    super(operand);
  }

  /**
   * Method for executing the multiply operation.
   * @param currentCalculator the calculator to be used.
   */
  execute(currentCalculator: Calculator): void {
    const ADD_OPERATOR: string = '*';
    currentCalculator.operation(ADD_OPERATOR, this.operand);
  }

  /**
   * Reverse the multiply operation by dividing.
   * @param currentCalculator the calculator to be used.
   */
  unExecute(currentCalculator: Calculator): void {
    const SUB_OPERATOR: string = '/';
    currentCalculator.operation(SUB_OPERATOR, this.operand);
  }
}

/**
 * Class that represents the divide operation for the calculator.
 */
class DivideCommand extends CalculatorCommand {
  /**
   * Constructor for the implementation of divide.
   */
  constructor(operand: number) {
    super(operand);
  }

  /**
   * Method for executing the divide operation.
   * @param currentCalculator the calculator to be used.
   */
  execute(currentCalculator: Calculator): void {
    const ADD_OPERATOR: string = '/';
    currentCalculator.operation(ADD_OPERATOR, this.operand);
  }

  /**
   * Reverse the divide operation by multiplying.
   * @param currentCalculator the calculator to be used.
   */
  unExecute(currentCalculator: Calculator): void {
    const SUB_OPERATOR: string = '*';
    currentCalculator.operation(SUB_OPERATOR, this.operand);
  }
}

/**
 * Class that represents the calculator.
 * Has an internal value that is modified by the operations.
 */
class Calculator {
  private currentValue: number = 0;

  /**
   * Performs an opeartion
   * @param operator indicates the operation
   * @param operand value to be used in the operation
   */
  public operation(operator: string, operand: number): void {
    switch (operator) {
      case '+':
        this.currentValue += operand;
        break;
      case '-':
        this.currentValue -= operand;
        break;
      case '*':
        this.currentValue *= operand;
        break;
      case '/':
        this.currentValue /= operand;
        break;
    }
    console.log(`${operator} ${operand} -> Current value = ${this.currentValue}`);
  }
}

/**
 * Class that manages the calculator and the commands.
 */
class CalculatorManager {
  private calculator: Calculator = new Calculator();
  private commands: CalculatorCommand[] = [];
  private current: number = 0;

  /**
   * Repeat the last operation that was undone.
   */
  public redo(): void {
    console.log('\n---- Redo last operation');
    if (this.current < this.commands.length) {
      const command: CalculatorCommand = this.commands[this.current++];
      command.execute(this.calculator);
    }
  }

  /**
   * Reverse the last operation.
   */
  public undo(): void {
    console.log('\n---- Undo last operation');
    if (this.current > 0) {
      const command: CalculatorCommand = this.commands[--this.current];
      command.unExecute(this.calculator);
    }
  }

  /**
   * Execute a command and store it.
   */
  public executeCommand(command: CalculatorCommand) {
    command.execute(this.calculator);
    this.commands.push(command);
    ++this.current;
  }
}

// Usage example
export function main(): void {
  const MY_CALCULATOR: CalculatorManager = new CalculatorManager();

  MY_CALCULATOR.executeCommand(new AddCommand(5));
  MY_CALCULATOR.executeCommand(new MultiplyCommand(3));
  MY_CALCULATOR.undo();
  MY_CALCULATOR.executeCommand(new SubstractCommand(2));
}

main();