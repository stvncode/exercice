export const vitestExercises = [
  {
    id: 1,
    title: "Write a test for a simple `add` function",
    objective: "Test a function that adds two numbers together.",
    codeStarter: `
      function add(a: number, b: number): number {
        return a + b;
      }
    `,
    solution: `
      import { describe, it, expect } from 'vitest';

      describe('add function', () => {
        it('should add two numbers correctly', () => {
          expect(add(1, 2)).toBe(3);
        });
      });
    `,
  },
  {
    id: 2,
    title: "Test if an object is empty",
    objective:
      "Write a test to check if an object is empty using `Object.keys`.",
    codeStarter: `
      function isEmpty(obj: object): boolean {
        return Object.keys(obj).length === 0;
      }
    `,
    solution: `
      import { describe, it, expect } from 'vitest';

      describe('isEmpty function', () => {
        it('should return true for an empty object', () => {
          expect(isEmpty({})).toBe(true);
        });
        it('should return false for a non-empty object', () => {
          expect(isEmpty({ key: 'value' })).toBe(false);
        });
      });
    `,
  },
  {
    id: 3,
    title: "Test asynchronous code with `async`/`await`",
    objective:
      "Write a test to check if an async function returns a result correctly.",
    codeStarter: `
      async function fetchData(url: string): Promise<any> {
        const response = await fetch(url);
        return response.json();
      }
    `,
    solution: `
      import { describe, it, expect, vi } from 'vitest';

      describe('fetchData function', () => {
        it('should return correct data', async () => {
          const mockData = { name: 'John Doe' };
          const fetchMock = vi.fn().mockResolvedValue({ json: () => mockData });
          global.fetch = fetchMock;

          const result = await fetchData('https://api.example.com/user');
          expect(result).toEqual(mockData);
          expect(fetchMock).toHaveBeenCalledTimes(1);
        });
      });
    `,
  },
  {
    id: 4,
    title: "Mocking a module",
    objective: "Mock an imported module to test a function that uses it.",
    codeStarter: `
      import { fetchDataFromAPI } from './api';

      function getUser() {
        return fetchDataFromAPI('https://api.example.com/user');
      }
    `,
    solution: `
      import { describe, it, expect, vi } from 'vitest';
      import { getUser } from './user';
      import * as api from './api';

      describe('getUser function', () => {
        it('should fetch user data correctly', async () => {
          const mockData = { name: 'John Doe' };
          vi.spyOn(api, 'fetchDataFromAPI').mockResolvedValue(mockData);

          const result = await getUser();
          expect(result).toEqual(mockData);
        });
      });
    `,
  },
  {
    id: 5,
    title: "Test if a number is even or odd",
    objective: "Test a function that checks if a number is even or odd.",
    codeStarter: `
      function isEven(num: number): boolean {
        return num % 2 === 0;
      }
    `,
    solution: `
      import { describe, it, expect } from 'vitest';

      describe('isEven function', () => {
        it('should return true for even numbers', () => {
          expect(isEven(2)).toBe(true);
          expect(isEven(4)).toBe(true);
        });
        it('should return false for odd numbers', () => {
          expect(isEven(1)).toBe(false);
          expect(isEven(3)).toBe(false);
        });
      });
    `,
  },
  {
    id: 6,
    title: "Test for array length",
    objective:
      "Test a function that checks if the length of an array is greater than a threshold.",
    codeStarter: `
      function hasLengthGreaterThan(arr: any[], length: number): boolean {
        return arr.length > length;
      }
    `,
    solution: `
      import { describe, it, expect } from 'vitest';

      describe('hasLengthGreaterThan function', () => {
        it('should return true for arrays with length greater than threshold', () => {
          expect(hasLengthGreaterThan([1, 2, 3], 2)).toBe(true);
        });
        it('should return false for arrays with length not greater than threshold', () => {
          expect(hasLengthGreaterThan([1, 2], 2)).toBe(false);
        });
      });
    `,
  },
  {
    id: 7,
    title: "Test if a string is palindrome",
    objective: "Write a test to check if a string is a palindrome.",
    codeStarter: `
      function isPalindrome(str: string): boolean {
        return str === str.split('').reverse().join('');
      }
    `,
    solution: `
      import { describe, it, expect } from 'vitest';

      describe('isPalindrome function', () => {
        it('should return true for palindromes', () => {
          expect(isPalindrome('racecar')).toBe(true);
        });
        it('should return false for non-palindromes', () => {
          expect(isPalindrome('hello')).toBe(false);
        });
      });
    `,
  },
  {
    id: 8,
    title: "Test a custom hook",
    objective: "Write a test for a custom React hook using Vitest.",
    codeStarter: `
      import { useState } from 'react';

      function useCounter(initialValue: number) {
        const [count, setCount] = useState(initialValue);
        const increment = () => setCount(count + 1);
        return { count, increment };
      }
    `,
    solution: `
      import { describe, it, expect } from 'vitest';
      import { renderHook, act } from '@testing-library/react-hooks';
      import { useCounter } from './useCounter';

      describe('useCounter hook', () => {
        it('should start with the initial value', () => {
          const { result } = renderHook(() => useCounter(0));
          expect(result.current.count).toBe(0);
        });
        it('should increment the count', () => {
          const { result } = renderHook(() => useCounter(0));
          act(() => result.current.increment());
          expect(result.current.count).toBe(1);
        });
      });
    `,
  },
  {
    id: 9,
    title: "Test if a value is truthy or falsy",
    objective: "Write a test that checks if a value is truthy or falsy.",
    codeStarter: `
      function isTruthy(value: any): boolean {
        return !!value;
      }
    `,
    solution: `
      import { describe, it, expect } from 'vitest';

      describe('isTruthy function', () => {
        it('should return true for truthy values', () => {
          expect(isTruthy(1)).toBe(true);
          expect(isTruthy('hello')).toBe(true);
        });
        it('should return false for falsy values', () => {
          expect(isTruthy(0)).toBe(false);
          expect(isTruthy('')).toBe(false);
        });
      });
    `,
  },
  {
    id: 10,
    title: "Test a class method",
    objective: "Test a method inside a class using Vitest.",
    codeStarter: `
      class Calculator {
        add(a: number, b: number): number {
          return a + b;
        }
      }
    `,
    solution: `
      import { describe, it, expect } from 'vitest';

      describe('Calculator class', () => {
        it('should add two numbers correctly', () => {
          const calc = new Calculator();
          expect(calc.add(2, 3)).toBe(5);
        });
      });
    `,
  },
]
