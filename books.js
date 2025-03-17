import { createClient } from "https://esm.sh/@supabase/supabase-js"
const supabaseUrl = 'https://vfabqfytiylrjrzmadiq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmYWJxZnl0aXlscmpyem1hZGlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwOTE3MTAsImV4cCI6MjA1NzY2NzcxMH0.Ns9uVnS2d50CFuyoRUarPrviGnz3KJXTXNCNGDs6Ylk'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: books, error } = await supabase
    .from('books')
    .select('*')

  for (let book of books) {
  let booklist = document.getElementById('books');
  booklist.innerHTML += `<li>${book.title} - ${book.author} - ${book.isbn}</li>`;
  }
}

getBooks();
