import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSheetData } from '../../utils/googleSheetsApi';
import './Review.css';

function Review() {
  const { title: urlTitle } = useParams();
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const data = await fetchSheetData('reviews');
        const review = data.find(
          ([title]) => title.toLowerCase().replace(/\W+/g, '-') === urlTitle
        );
        if (review) {
          setReviewData({
            title: review[0],
            overallScore: review[1],
            reviewDate: review[2],
            genre: review[3],
            releaseYear: review[4],
            platform: review[5],
            commentText: review[6],
            imageUrl: review[7],
            introText: review[8],
            gameplayScore: review[9],
            gameplayText: review[10],
            visualsArtStyleScore: review[11],
            visualsArtStyleText: review[12],
            storyScore: review[13],
            storyText: review[14],
            soundMusicScore: review[15],
            soundMusicText: review[16],
            immersionScore: review[17],
            immersionText: review[18],
            innovationCreativityScore: review[19],
            innovationCreativityText: review[20],
            replayabilityScore: review[21],
            replayabilityText: review[22],
            performanceScore: review[23],
            performanceText: review[24],
            multiplayerScore: review[25],
            multiplayerText: review[26],
            valueScore: review[27],
            valueText: review[28],
            conclusionText: review[29],
          });
        }
      } catch (error) {
        console.error("Error fetching review data:", error);
      }
    };

    fetchReviewData();
  }, [urlTitle]);

  if (!reviewData) {
    return <p>Loading review...</p>;
  }

  const scoreColor = (score) => {
    const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#7FFF00',
                    '#00FF00', '#00FF7F', '#00FFFF', '#007FFF',
                    '#0000FF', '#8B00FF'];
    return colors[score - 1];
  };
  
    const Section = ({ score, text, title }) => {
    if (!score || !text) return null;
    return (
        <div className="review-section">
        <div className="section-header">
            <div className="review-score" style={{ backgroundColor: scoreColor(score) }}>
            {score}
            </div>
            <h3 className="section-title">{title}</h3>
        </div>
        <p className="section-text">{text}</p>
        </div>
    );
    };

  return (
    <div className="review-details">
      <h1>{reviewData.title}</h1>
      <p>{reviewData.commentText}</p>
      <div className="image-container" style={{ position: 'relative' }}>
        <img src={reviewData.imageUrl} alt={`${reviewData.title} game`} className="review-image" />
        <div className="score-overlay" style={{ backgroundColor: scoreColor(reviewData.overallScore) }}>
            {reviewData.overallScore}
        </div>
        </div>
      <div className="review-date">DATE: {reviewData.reviewDate}</div>
      <h2>Intro</h2>
      <p>{reviewData.introText}</p>
      <Section title="Gameplay" score={reviewData.gameplayScore} text={reviewData.gameplayText} />
      <Section title="Visuals & Art Style" score={reviewData.visualsArtStyleScore} text={reviewData.visualsArtStyleText} />
      <Section title="Story" score={reviewData.storyScore} text={reviewData.storyText} />
      <Section title="Sound & Music" score={reviewData.soundMusicScore} text={reviewData.soundMusicText} />
      <Section title="Immersion" score={reviewData.immersionScore} text={reviewData.immersionText} />
      <Section title="Innovation & Creativity" score={reviewData.innovationCreativityScore} text={reviewData.innovationCreativityText} />
      <Section title="Replayability" score={reviewData.replayabilityScore} text={reviewData.replayabilityText} />
      <Section title="Performance" score={reviewData.performanceScore} text={reviewData.performanceText} />
      <Section title="Multiplayer" score={reviewData.multiplayerScore} text={reviewData.multiplayerText} />
      <Section title="Value" score={reviewData.valueScore} text={reviewData.valueText} />
      <h2>Conclusion</h2>
      <p>{reviewData.conclusionText}</p>
    </div>
  );
}

export default Review;