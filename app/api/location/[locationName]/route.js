export async function GET(request) {
  const { locationName } = request.params;
  const location = await getLocationByName(locationName);

  if (!location) {
    return NextResponse.json({ error: "Location not found" }, { status: 404 });
  }

  return NextResponse.json(location);
}
