import React from "react";
import "./taskPreview.scss";

const TaskPreview = () => (
  <div className="task-preview">
    <div className="create-task-title">
      <h2>Novo compromisso</h2>
    </div>
    <form className="task-form">
      <input
        type="text"
        name="title"
        id="form-title"
        required
        placeholder="Titulo do compromisso"
      />
      <label htmlFor="description" className="form-desc">
        Descrição:
      </label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
      ></textarea>
      <label htmlFor="date" className="form-date">
        Data:
      </label>
      <input type="date" name="date" id="date" />
      <input type="submit" value="Enviar" className="btn-send" />
    </form>
  </div>
);

export default TaskPreview;
