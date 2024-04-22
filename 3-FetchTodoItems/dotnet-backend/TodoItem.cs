public class TodoItem(string title)
{
    public Guid Id { get; set; } = Guid.NewGuid();

    public string Title { get; set; } = title;

    public List<string> Tags { get; set; } = [];

    public bool IsComplete { get; set; } = false;

    public int Priority { get; set; } = 0;
}
