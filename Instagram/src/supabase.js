import  {createClient} from "@supabase/supabase-js"

const supabaseUrl = 'https://wzuzemjdfmoigaddudce.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6dXplbWpkZm1vaWdhZGR1ZGNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzNTMwMTIsImV4cCI6MTk4NjkyOTAxMn0.eaqq8GlY8c5YtD-1FzcJRz_iYxfyTCOHXGAr-glTg0I'
export const supabase = createClient(supabaseUrl, supabaseKey)