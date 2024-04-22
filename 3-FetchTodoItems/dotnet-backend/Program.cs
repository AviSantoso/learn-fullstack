var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var todos = new List<TodoItem> {
    new TodoItem("Learn to code") {
        Priority = 1,
        IsComplete = true
    },
    new TodoItem("Take out the trash") {
        Priority = 0,
        IsComplete = false,
        Tags = new List<string> { "Habits", "Chores" }
    },
    new TodoItem("Read a good book") {
        Priority = 0,
        IsComplete = false,
        Tags = new List<string> { "Habits" }
    }
};

app.MapGet("/", () => "Hello World!");

app.MapGet("/todos", () => todos);

app.Run();
