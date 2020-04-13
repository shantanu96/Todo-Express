$(function () {
    $('#newTask').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which); //cross origin solution
        if (keycode == '13') {
            var newTask = $("#newTask").val();
            var groupName = $("input[name='groupName']").val();
            $.ajax({
                url: "/addtask",
                type: "POST",
                data: { newTask: newTask, groupName: groupName },
                success: function (result) {
                    $("#newTask").val("");
                    console.log("Task added.")
                    location.reload();
                }
            });
        }
    });

    $(".taskDoneBtn").on('click', function () {
        var taskId = $(this).data('id');
        var groupName = $("input[name='groupName']").val();
        $.ajax({
            url: "/marktaskdone/" + groupName + "/" + taskId,
            success: function (result) {
                console.log("Task marked.")
                location.reload();
            }
        });
    });

    $(".removeTaskBtn").on('click', function () {
        var taskId = $(this).data('id');
        var groupName = $("input[name='groupName']").val();
        $.ajax({
            url: "/removetask/" + groupName + "/" + taskId,
            success: function (result) {
                console.log("Task removed.")
                location.reload();
            }
        });
    });

    $("#newGroup").keypress(function () {
        var keycode = (event.keyCode ? event.keyCode : event.which); //cross origin solution
        if (keycode == '13') {
            var groupName = $("#newGroup").val();

            $.ajax({
                url: "/addgroup/" + groupName,
                success: function (result) {
                    console.log("Group added.")
                    location.reload();
                }
            });
        }
    })
});