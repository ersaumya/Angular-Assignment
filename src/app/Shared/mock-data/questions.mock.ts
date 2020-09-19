import { QuestionInterface } from './../types/question-interface';

export const questions: QuestionInterface[] = [
  {
    id: 1,
    questionText: 'HTML stands for?',
    answerOptions: {
      A: 'Hyper Text Markup Language',
      B: 'High Text Markup Language',
      C: 'Hyper Tabular Markup Language',
      D: 'None of these',
    },
    correctAnswer: 'A',
    author: 'saumya',
    stats: { askedDate: '09/12/1994', count: 100, percent: '20%' },
  },
  {
    id: 2,
    questionText:'Which of the following tag is used to mark a begining of paragraph ?',
    answerOptions: { A: '<TD>', B: '<br>', C: '<P>', D: '<TR>' },
    correctAnswer: 'C',
    author: 'saumya',
    stats: { askedDate: '09/12/1994', count: 100, percent: '20%' },
  },
  {
    id: 3,
    questionText: 'From which tag descriptive list starts',
    answerOptions: { A: '<LL>', B: '<DD>', C: '<DL>', D: '<DS>' },
    correctAnswer: 'C',
    author: 'saumya',
    stats: { askedDate: '09/12/1994', count: 100, percent: '20%' },
  }
];
