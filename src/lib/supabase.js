import { createClient } from '@supabase/supabase-js'

// Replace with your actual credentials from Step 1.3
const supabaseUrl = 'https://ieprrqgtszbwxiruktpu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllcHJycWd0c3pid3hpcnVrdHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMjkwNjYsImV4cCI6MjA3NTcwNTA2Nn0.-0y7gOmjyWwCy3KtsSE3um9bGsuJmpVYxP5m65oCb7k'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)