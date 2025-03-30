<script>
    export let username;
    export let displayName = "";
</script>

<div class="GitHubUser">
    <a class="info button" href={`https://github.com/${username}`} title="GitHub profile of &quot;{username}&quot;">
        <img src={`https://github.com/${username}.png`} loading="lazy" class="pfp" alt="Profile picture of user &quot;{username}&quot;">
        {displayName !== "" ? displayName : username}
    </a>
    <p class="description">
        <slot></slot>
    </p>
</div>

<style>
    .info {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: var(--bg-alt-2);
        border-radius: 10px;
        padding: 10px;
        gap: 10px;
    }

    .GitHubUser {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background-color: var(--bg-alt);
        border-radius: 10px;
        gap: 10px;
    }

    .pfp {
        width: 32px;
        height: 32px;
        border-radius: 5px;
    }

    .description {
        margin: 0 0 1.5em;
    }
</style>