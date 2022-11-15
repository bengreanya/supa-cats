const SUPABASE_URL = 'https://cvpnauqokinnpwanskbe.supabase.co';

const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2cG5hdXFva2lubnB3YW5za2JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwNDMsImV4cCI6MTk4MzY4NDA0M30.A8Io_J4_NWTx-iVGngaqEBOxKmW8AGDymaSwiRF2Q0Q';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllCats() {
    const response = await client.from('myCats').select();
    return response.data;
}
