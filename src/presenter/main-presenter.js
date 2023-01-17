import SortView from '../view/sort-view.js';
import EventView from '../view/event-view.js';
import EditEventView from '../view/edit-event-view.js';
import EventsListView from '../view/events-list-view.js';
import BoardView from '../view/board-section-view.js';
import AddEventView from '../view/add-event-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  // boardComponent = new BoardView();
  eventListComponent = new EventsListView();
  // boardContainer;
  // points;
  // offers;
  // destinations;

  constructor({boardContainer, pointsModel, offersModel, destinationsModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
    this.offersModel = offersModel;
    this.destinationsModel = destinationsModel;
  }

  init() {
    console.log(this.pointsModel)
    console.log(this.pointsModel.getPoints())
    this.points = [...this.pointsModel.getPoints()];
    this.offers = [...this.offersModel.getOffers()];
    this.destinations = [...this.destinationsModel.getDestinations()];

    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.eventListComponent, this.boardComponent.getElement());
    render(new EditEventView({point: this.boardPoints[0]}), this.eventListComponent.getElement());

    for (let i = 1; i < this.boardPoints.length; i++) {
      render(new EventView({point: this.boardPoints[i]}), this.eventListComponent.getElement());
    }

    render(new AddEventView(), this.eventListComponent.getElement());
  }
}
// +presenter one more ??

