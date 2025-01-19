interface SocialLinks {
    github: string;
    linkedin: string;
    email: string;
  }
  
  interface Config {
    name: string;
    title: string;
    email: string;
    github: {
      username: string;
      repoLimit?: number;
    };
    social: SocialLinks;
    siteMetadata: {
      title: string;
      description: string;
    };
  }
  
  const config: Config = {
    name: "Samuel Vespalec",
    title: "Backend Developer",
    email: "vespalecsamuel@gmail.com",
    github: {
      username: "svespalec",
      repoLimit: 6,
    },
    social: {
      github: "https://github.com/svespalec",
      linkedin: "https://linkedin.com/in/samuel-vespalec",
      email: "mailto:vespalecsamuel@gmail.com"
    },
    siteMetadata: {
      title: "Samuel Vespalec - Backend Developer",
      description: "Backend Developer specializing in cloud infrastructure, cybersecurity, and reverse engineering."
    }
  };
  
  export default config; 