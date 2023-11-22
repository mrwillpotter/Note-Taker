# Note-Taker

The **Note-Taker** is a simple application designed to help users create, view, and delete notes. It utilizes a JSON database to store notes, `readFile` and `writeFile` functions to manage note data, and the Express framework to handle routing.

## Installation

To get started with the Note-Taker app, follow these steps:

1. Clone the repository:

```git clone https://github.com/your-username/note-taker.git ```

2. Navigate to the project directory:

``` cd note-taker ```

3. Install dependencies:

``` npm install ```

4. Run the application:

``` npm run start ```

## Usage

Once the application is running, access it through your web browser using the specified URL (typically `http://localhost:3001`). Here are the main functionalities:

- **Homepage**: Click on the "Get Started" button to navigate to the notes page.

<p align="center"><img width="753" alt="Screenshot 2023-11-22 at 12 11 43" src="https://github.com/mrwillpotter/Note-Taker/assets/141876794/341dd484-6760-43e8-bf3b-a4e78c304d25"></p>

- **Create a Note**: Click on the "New Note" button to create a new note.

<p align="center"><img width="753" alt="Screenshot 2023-11-22 at 12 12 09" src="https://github.com/mrwillpotter/Note-Taker/assets/141876794/33d1be83-a1b2-4ebf-8ba0-69f2586225c8"></p>

- **Save New Note**: Click on the "Save Note" button to save your new note or on the "Clear Form" button to start again.

<p align="center"><img width="753" alt="Screenshot 2023-11-22 at 12 12 52" src="https://github.com/mrwillpotter/Note-Taker/assets/141876794/7bcd3d81-4cdd-45f7-9a91-1cec97c0c72a"></p>


- **View Notes**: Existing notes are displayed on the left-hand side. Click on a note to view its contents.

<p align="center"><img width="753" alt="Screenshot 2023-11-22 at 12 14 25" src="https://github.com/mrwillpotter/Note-Taker/assets/141876794/0334ee5d-07a9-4fdf-9d43-7e8d0bff00cf"></p>

- **Delete a Note**: To delete a note, click on the trashcan icon next to the note.

## Dependencies

The Note-Taker app relies on the following main dependencies:

- **Express**: Used to create the server and handle routing.
- **JSON Database**: Notes are stored in a JSON format for easy management using `readFile` and `writeFile` functions.

## Structure

The project structure is organized as follows:

- `server.js`: Entry point for the application. Sets up the Express server and routes.
- `public/`: Contains front-end assets (HTML, CSS, client-side JavaScript).
- `routes/`: Includes route handlers for note creation, deletion, and retrieval.
- `db/`: Holds the JSON database file where notes are stored.

## GitHub URL

https://mrwillpotter.github.io/Note-Taker/

## GitHub Repo

https://github.com/mrwillpotter/Note-Taker
