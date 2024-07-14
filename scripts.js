document.addEventListener('DOMContentLoaded', function() {
    const stories = [
        { id: 1, title: 'Hikaye 1', content: 'Bu hikaye çok komik!', likes: 0, views: 0 },
        { id: 2, title: 'Hikaye 2', content: 'Bu da çok komik!', likes: 0, views: 0 },
    ];

    const storiesContainer = document.getElementById('stories');
    
    stories.forEach(story => {
        const storyTitle = document.createElement('div');
        storyTitle.className = 'story-title';
        storyTitle.textContent = story.title;
        storyTitle.onclick = () => {
            story.views += 1;
            alert(`${story.content}\n\nGörüntüleme sayısı: ${story.views}`);
            storyContent.style.display = storyContent.style.display === 'block' ? 'none' : 'block';
        };

        const storyContent = document.createElement('div');
        storyContent.className = 'story-content';
        storyContent.textContent = story.content;

        const likeButton = document.createElement('div');
        likeButton.className = 'like-btn';
        likeButton.textContent = 'Like';
        likeButton.onclick = () => {
            story.likes += 1;
            alert(`Bu hikaye ${story.likes} kez beğenildi.`);
        };

        storiesContainer.appendChild(storyTitle);
        storiesContainer.appendChild(storyContent);
        storiesContainer.appendChild(likeButton);
    });

    document.getElementById('logo').onclick = () => {
        const password = prompt('Şifre girin:');
        if (password === 'başak') {
            alert('Admin paneline hoş geldiniz!');
            // Admin paneli işlemleri burada yapılacak
        } else {
            alert('Yanlış şifre!');
        }
    };
});
