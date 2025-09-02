// Basic interactivity: dynamic year and theme toggle
(function(){
	const yearEl = document.getElementById('year');
	if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

	const toggle = document.getElementById('theme-toggle');
	const root = document.documentElement;
	const saved = localStorage.getItem('theme');
	if(saved) root.setAttribute('data-theme', saved);

	if(toggle){
		toggle.addEventListener('click', ()=>{
			const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
			root.setAttribute('data-theme', current);
			localStorage.setItem('theme', current);
			toggle.setAttribute('aria-pressed', current === 'dark');
		});
		// Reflect initial state
		toggle.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'dark');
	}

		// Contact form handling
		const form = document.getElementById('contact-form');
		const status = document.getElementById('form-status');
		if(form){
			// Replace this with your Formspree endpoint or server endpoint
			const endpoint = form.getAttribute('action') || '';
			form.addEventListener('submit', async (e)=>{
				e.preventDefault();
				status.textContent = 'Sending...';
				const data = new FormData(form);
				try{
					if(endpoint.startsWith('mailto:') || !endpoint){
						// If no endpoint configured, fallback: try to open user's mail client
						status.textContent = 'No server endpoint configured — opening your mail client.';
						// Allow native submission as a fallback
						form.removeEventListener('submit', ()=>{});
						form.submit();
						return;
					}

					const res = await fetch(endpoint, {
						method: 'POST',
						body: data,
						headers: { 'Accept': 'application/json' }
					});
					if(res.ok){
						status.textContent = 'Message sent — thank you!';
						form.reset();
					} else {
						status.textContent = 'There was an error sending your message.';
					}
				}catch(err){
					console.error(err);
					status.textContent = 'Network error — please try again later.';
				}
			});
		}
})();