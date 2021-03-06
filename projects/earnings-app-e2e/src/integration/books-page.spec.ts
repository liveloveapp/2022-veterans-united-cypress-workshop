import { BookModel, BookRequiredProps } from '@book-co/shared-models';
import * as uuid from 'uuid';
import * as BooksApi from '../support/books.api';
import * as AuthApi from '../support/auth.api';
import * as BookListComponent from '../support/book-list-component.harness';
import * as BookFormComponent from '../support/book-form-component.harness';
import * as BooksPage from '../support/books-page.harness';

describe('Books Page', () => {
  function setup(options: { shouldFailToLoadBooks?: boolean } = {}) {
    const book: BookModel = {
      id: uuid.v4(),
      name: 'The Lord of the Rings',
      earnings: '100',
      description:
        'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien.',
    };

    if (options.shouldFailToLoadBooks) {
    } else {
    }

    cy.visit('/');

    return book;
  }

  it('should show a list all of the books', () => {
    const book = setup();
  });

  it('should gracefully show an error message when loading the books fails', () => {
    setup({ shouldFailToLoadBooks: true });
  });

  it('should let you create a book', () => {
    setup();
  });
});
