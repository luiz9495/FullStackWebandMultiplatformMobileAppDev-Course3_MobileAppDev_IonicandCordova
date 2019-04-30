import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController, ModalController } from 'ionic-angular';
import { FavoriteProvider } from '../../providers/favorite/favorite';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Dish } from '../../shared/dish';
import { CommentPage } from '../comment/comment';

/**
 * Generated class for the DishdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage {
  dish: Dish;
  errMess: string;
  avgstars: string;
  numcomments: number;
  favorite: boolean;

  constructor(public navCtrl: NavController,
        public navParams: NavParams,
        @Inject('BaseURL') private BaseURL,
        private favoriteservice: FavoriteProvider,
        private socialSharing: SocialSharing,
        private toastCtrl: ToastController,
        private actionSheetCtrl: ActionSheetController,
        private modalCtrl: ModalController) {

    this.dish = navParams.get('dish');
    this.favorite = favoriteservice.isFavorite(this.dish.id);
    this.numcomments = this.dish.comments.length;
    let total = 0;
    this.dish.comments.forEach(comment => total += comment.rating );
    this.avgstars = (total/this.numcomments).toFixed(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }

  addToFavorites() {
    console.log('Adding to Favorites', this.dish.id);
    this.favorite = this.favoriteservice.addFavorite(this.dish.id);
    this.toastCtrl.create({
      message: 'Dish ' + this.dish.id + ' added as a favorite successfully',
      duration: 3000
    }).present();
  }

  openComment() {
    let modal = this.modalCtrl.create(CommentPage);
    modal.onDidDismiss(data => {
      console.log(data);
      this.dish.comments.push(data);
    });
    modal.present();
  }

  presentActionSheet() {
    console.log('present ActionSheet');

    let actionSheet = this.actionSheetCtrl.create({
     title: 'Select Dish Actions',
     buttons: [
       {
         text: 'Add to Favorites',
         role: 'destructive',
         handler: () => {
           console.log('Add to Favorites clicked');
           this.addToFavorites();
         }
       },
       {
         text: 'Add Comment',
         role: 'destructive',
         handler: () => {
           console.log('Add Comment clicked');
           this.openComment();
         }
       },
       {
         text: 'Share via Facebook',
         handler: () => {
           this.socialSharing.shareViaFacebook(this.dish.name + ' -- ' + this.dish.description, this.BaseURL + this.dish.image, '')
             .then(() => console.log('Posted successfully to Facebook'))
             .catch(() => console.log('Failed to post to Facebook'));
         }
       },
       {
         text: 'Share via Twitter',
         handler: () => {
           this.socialSharing.shareViaTwitter(this.dish.name + ' -- ' + this.dish.description, this.BaseURL + this.dish.image, '')
             .then(() => console.log('Posted successfully to Twitter'))
             .catch(() => console.log('Failed to post to Twitter'));
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
    });
    actionSheet.present();
  }

}
