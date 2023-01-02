import React from "react";
import { useContext } from "react";
import { countsContexts } from "../context/CountContext";

function countCard({ task }) {
  const { deleteCount } = useContext(countsContexts);
  return (
    <div>
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src={task.avatar_url} />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{task.name}</strong> <small>{task.login}</small>
              <br />
              {task.bio}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small">
                  <i class="fas fa-reply"></i>
                </span>
              </a>
              <a class="level-item">
                <span class="icon is-small">
                  <i class="fas fa-retweet"></i>
                </span>
              </a>
              <a class="level-item">
                <span class="icon is-small">
                  <i class="fas fa-heart"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
        <div class="media-right">
          <button class="delete" onClick={() => deleteCount(task.id)}></button>
        </div>
      </article>
    </div>
  );
}

export default countCard;
