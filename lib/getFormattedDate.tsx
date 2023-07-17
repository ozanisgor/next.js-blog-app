export default function getFormattedDate(dateString: string) {
  return new Intl.DateTimeFormat("en-TR", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
