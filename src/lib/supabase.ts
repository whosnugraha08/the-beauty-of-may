import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uqgcztbdaffskhnsghhb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxZ2N6dGJkYWZmc2tobnNnaGhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNTIwNzQsImV4cCI6MjA5NDgyODA3NH0.1oYVCIh-HDMnh1QxNEp8LZpcCna-YTNSnKHLMHwew4g';

export const supabase = createClient(supabaseUrl, supabaseKey);
